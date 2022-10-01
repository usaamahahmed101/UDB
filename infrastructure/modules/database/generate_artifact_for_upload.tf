resource "null_resource" "clean_up_temp_dir" {
  provisioner "local-exec" {
    command = "rm -rf ${path.module}/temp/*"
  }
}

resource "local_file" "render_mongod_templates" {
  for_each = local.mongod_artifacts.templates
  content = templatefile("${path.module}/templates/${each.value}.tftpl",
    {
      repl_init         = local.mongod_artifacts.templates["script_2"]
      date_format       = local.date_format
      db_datafiles_path = var.db_datafiles_path
      replicaset_status = var.replicaset_status
      db_logfile_path   = var.db_logfile_path
      replicaset_name   = var.replicaset_name
      pid_file_path     = var.pid_file_path
      default_port      = var.default_port
      bucket_name       = var.default_bucket
      ip_addr_1         = "${google_compute_address.internal_ip["a"].address}:${var.default_port}"
      ip_addr_2         = var.replicaset_status ? "${google_compute_address.internal_ip["b"].address}:${var.default_port}" : ""
      ip_addr_3         = var.replicaset_status ? "${google_compute_address.internal_ip["c"].address}:${var.default_port}" : ""
  })
  filename = "${path.module}/mongod_artifacts/${each.value}"
  depends_on = [
    null_resource.clean_up_temp_dir
  ]
}

data "archive_file" "mongo_configuration_artifact" {
  type        = "zip"
  output_path = "${path.module}/temp/mongo_configuration_artifact_${local.date_format}.zip"
  source_dir  = "${path.module}/mongod_artifacts/"
  depends_on = [
    local_file.render_mongod_templates
  ]
}


