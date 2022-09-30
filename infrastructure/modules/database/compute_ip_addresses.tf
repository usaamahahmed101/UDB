resource "google_compute_address" "internal_ip" {
  for_each     = local.mongo_nodes
  name         = "internal-address-${each.key}-net"
  address_type = "INTERNAL"
  subnetwork   = var.network_private
}