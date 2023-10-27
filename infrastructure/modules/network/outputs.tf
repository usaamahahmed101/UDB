output "network_private" {
  value = google_compute_subnetwork.private.self_link
}

output "network_public" {
  value = google_compute_subnetwork.public.self_link
}

output "internal_lb_ip" {
  value = google_compute_address.internal_load_balancer_ip.self_link
}