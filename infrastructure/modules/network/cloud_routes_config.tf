# Access to the internet
resource "google_compute_route" "ingress_internet" {
  name             = "ingress-internet"
  network          = google_compute_network.mainvpc.id
  description      = "route access from the internet"
  dest_range       = "0.0.0.0/0"
  next_hop_gateway = "default-internet-gateway"
  tags             = ["bastion", "allow-ssh"]
}