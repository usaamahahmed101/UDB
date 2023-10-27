resource "google_compute_instance_from_template" "mongo_nodes" {
  for_each = local.mongo_nodes
  name     = each.value.name
  zone     = each.value.zone


  source_instance_template = google_compute_instance_template.mongo_nodes_template.self_link

  // Override fields from instance template
  network_interface {
    subnetwork = var.network_private
    network_ip = google_compute_address.internal_ip["${each.key}"].address
  }

  boot_disk {
    initialize_params {
      image = "projects/devops-361723/global/images/base-centos-oct262023-ami"
    }
    auto_delete = true
  }

  attached_disk {
    source = google_compute_disk.data_disk_creations[each.key].self_link
  }

  attached_disk {
    source = google_compute_disk.log_disk_creations[each.key].self_link
  }

}


