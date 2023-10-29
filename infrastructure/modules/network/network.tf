# Main VPC
resource "google_compute_network" "mainvpc" {
  name                    = "mainvpc"
  auto_create_subnetworks = false
}

# Cloud Router
resource "google_compute_router" "router" {
  name    = "router"
  network = google_compute_network.mainvpc.name
  bgp {
    asn            = 64514
    advertise_mode = "CUSTOM"
  }
  region = var.default_network_rgn
}

# Public Subnet  
resource "google_compute_subnetwork" "public" {
  name          = "public"
  ip_cidr_range = "192.168.0.0/24"
  network       = google_compute_network.mainvpc.id
  region        = var.default_network_rgn
}


# Private Subnet  
resource "google_compute_subnetwork" "private" {
  name          = "private"
  ip_cidr_range = "192.168.1.0/24"
  network       = google_compute_network.mainvpc.id
  region        = var.default_network_rgn


}

resource "google_compute_address" "internal_load_balancer_ip" {
  
  name         = "my-internal-address"
  subnetwork   = google_compute_subnetwork.private.id
  address_type = "INTERNAL"
}

data "google_compute_address" "internal_load_balancer_ip_data" {
  depends_on = [ google_compute_address.internal_load_balancer_ip ]
  name    = "my-internal-address"
}

# NAT Gateway
resource "google_compute_router_nat" "nat" {
  name                               = "nat"
  router                             = google_compute_router.router.name
  nat_ip_allocate_option             = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat = "LIST_OF_SUBNETWORKS"
  subnetwork {
    name                    = google_compute_subnetwork.private.self_link
    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }
  region = var.default_network_rgn
}


