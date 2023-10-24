resource "google_compute_instance_template" "app_nodes_template" {
  name         = "app-node-template"
  machine_type = "e2-small"
  tags         = ["app"]


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

  metadata_startup_script = templatefile("${path.module}/templates/app_startup.sh.tftpl", {
    date_format = local.date_format
    bucket_name = var.default_bucket
  })
  
}