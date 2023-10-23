resource "google_compute_instance_template" "web_nodes_template" {
  name         = "web-node-template"
  machine_type = "e2-small"
  tags         = ["web"]


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
    source_image = "debian-cloud/debian-10"
  }

  metadata_startup_script = templatefile("${path.module}/templates/web_startup.sh.tftpl", {
    date_format = local.date_format
    bucket_name = var.default_bucket
  })
  
}