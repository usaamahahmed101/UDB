resource "google_compute_firewall" "allow_ingress_ssh" {
  name    = "allow-ssh"
  network = google_compute_network.mainvpc.name

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["bastion"]
}

resource "google_compute_firewall" "bastion_firewall" {
  name    = "bastion-firewall"
  network = google_compute_network.mainvpc.name

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }
  source_ranges = ["10.174.0.0/24"]
  source_tags   = ["bastion"]
  target_tags   = ["mongo"]
}

resource "google_compute_firewall" "mongo_firewall" {
  name    = "mongo-firewall"
  network = google_compute_network.mainvpc.name

  allow {
    protocol = "tcp"
    ports    = ["22", "27018", "27020"]
  }
  source_ranges = ["10.174.1.0/24"]
  source_tags   = ["mongo"]
  target_tags   = ["mongo"]
}