resource "google_compute_disk" "log_disk_creations" {
  for_each = local.mongo_nodes
  name     = each.value.log_disk_name
  size     = each.value.size
  type     = each.value.type
  zone     = each.value.zone
}