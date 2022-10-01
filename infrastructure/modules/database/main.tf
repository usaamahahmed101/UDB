resource "google_compute_instance_template" "mongo_nodes_template" {
  name         = "mongo-node-template"
  machine_type = "e2-micro"
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
    date_format        = local.date_format
    bucket_name        = var.default_bucket
    download_init_conf = local.download_init_conf
  })

}
