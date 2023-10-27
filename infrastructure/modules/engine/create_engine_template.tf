resource "google_compute_instance_template" "engine_nodes_template" {
  name         = "${var.engine_type}-engine-node-template"
  machine_type = "e2-small"
  tags         = ["engine"]


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
    source_image = "projects/devops-361723/global/images/base-centos-oct262023-ami"
  }

  metadata_startup_script = templatefile("${path.module}/templates/engine_startup.sh.tftpl", {
    web_server_installation = local.templates.web_server_installation
    api_server_installation = local.templates.api_server_installation
    engine_type = var.engine_type
  })
  
}