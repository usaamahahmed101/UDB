resource "google_compute_instance" "bastion_host" {
  name         = "bastion-host"
  machine_type = "e2-micro"
  zone         = var.default_zone
  tags         = ["bastion"]

  boot_disk {
    initialize_params {
      image = "projects/devops-361723/global/images/base-centos-oct262023-ami"
    }
    auto_delete = true
  }

  network_interface {
    subnetwork = var.network_public
    access_config {}
  }

  service_account {
    email  = var.service_account
    scopes = ["cloud-platform"]
  }

  metadata_startup_script = templatefile("${path.module}/templates/bastion_startup_script.sh.tftpl", {
    admin_user = var.admin_user
  })
}