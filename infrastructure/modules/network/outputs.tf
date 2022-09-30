output "network_private" {
  value = google_compute_subnetwork.private.self_link
}

output "network_public" {
  value = google_compute_subnetwork.public.self_link
}