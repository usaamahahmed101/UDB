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

resource "google_compute_firewall" "bastion_mongo_firewall" {
  name    = "bastion-mongo-firewall"
  network = google_compute_network.mainvpc.name

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }
  source_ranges = ["192.168.0.0/24"]
  source_tags   = ["bastion"]
  target_tags   = ["mongo","web"]
}

resource "google_compute_firewall" "web_web_firewall" {
  name    = "mongo-web-firewall"
  network = google_compute_network.mainvpc.name

  allow {
    protocol = "tcp"
    ports    = ["22","27018","80"]
  }
  source_tags   = ["web"]
  target_tags   = ["mongo","web"]
}

# allow access from health check ranges
resource "google_compute_firewall" "default" {
  name          = "l7-xlb-fw-allow-hc"
  direction     = "INGRESS"
  network       = google_compute_network.mainvpc.name
  source_ranges = ["130.211.0.0/22", "35.191.0.0/16"]
  allow {
    protocol = "tcp"
    ports    = ["80"]
  }
  target_tags = ["web"]
}