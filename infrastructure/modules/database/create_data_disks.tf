resource "google_compute_disk" "data_disk_creations" {
  for_each = local.mongo_nodes
  name  = "${each.value.data_disk_name}"
  size  = each.value.size
  type  = each.value.type
  zone  = each.value.zone
}
