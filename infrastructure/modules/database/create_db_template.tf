
resource "google_compute_instance_template" "mongo_nodes_template" {
  name         = "mongo-node-template"
  machine_type = "e2-medium"
  tags         = ["mongo"]


  #   // Local SSD disk
  #   scratch_disk {
  #     interface = "SCSI"
  #   }

  network_interface {
    subnetwork = var.network_private
  }

  service_account {
    email  = local.service_account
    scopes = ["cloud-platform"]
  }

  metadata = {
    #enable-oslogin: "TRUE"
  }

  disk {
    auto_delete  = true
    boot         = true
    source_image = "centos-cloud/centos-7"
  }

  metadata_startup_script = templatefile("${path.module}/templates/mongo_startup.sh.tftpl", {
    date_format = local.date_format
    bucket_name = var.default_bucket
  })
}

# resource "null_resource" "run_ansible_playbook" {
#   provisioner "local-exec" {
#     command = "chmod +x ./infrastructure/modules/database/mongod_artifacts/check_ssh_availability.sh; /bin/bash ./infrastructure/modules/database/mongod_artifacts/check_ssh_availability.sh"
#   }
#   depends_on = [
#     local_file.render_mongod_templates,
#     google_compute_instance_from_template.mongo_nodes
#   ]
# }

