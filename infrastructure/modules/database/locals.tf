locals {

  timestamp   = timestamp()
  date_format = formatdate("DD_MM_YY", local.timestamp)

  complete_environment = "${var.env}-${var.env_owner}"

  mongod_artifacts = {
    "templates" = {
      "script_1" = "init_mongod_process.sh",
      "script_2" = "repl_init.conf",
      "script_3" = "mongodb.repo",
      "script_4" = "mongod.conf",
      "script_5" = "install_mongo.sh",
      "script_6" = "mongod.service",
      "script_7" = "install_required_packages.sh",
      "script_8" = "install_data_disk.sh",
    }
  }

  mongo_nodes_id = {
    "node_1" = "a"
    "node_2" = "b"
    "node_3" = "c"
  }

  nodes = {
    "a" = {
      "name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_1}",
      "zone" = "${var.rgn}-${local.mongo_nodes_id.node_1}",
      "data_disk_name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_1}-data-disk",
      "log_disk_name"  = "${local.complete_environment}-node-${local.mongo_nodes_id.node_1}-log-disk",
      "size" = 25,
      "type" = "pd-ssd",
    },

    "b" = {
      "name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_2}",
      "zone" = "${var.rgn}-${local.mongo_nodes_id.node_2}",
      "data_disk_name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_2}-data-disk",
      "log_disk_name"  = "${local.complete_environment}-node-${local.mongo_nodes_id.node_2}-log-disk",
      "size" = 25,
      "type" = "pd-ssd",
    },

    "c" = {
      "name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_3}",
      "zone" = "${var.rgn}-${local.mongo_nodes_id.node_3}",
      "data_disk_name" = "${local.complete_environment}-node-${local.mongo_nodes_id.node_3}-data-disk",
      "log_disk_name"  = "${local.complete_environment}-node-${local.mongo_nodes_id.node_3}-log-disk",
      "size" = 25,
      "type" = "pd-ssd"
    }
  }

  service_account = "${var.service_account}"

  mongo_nodes = var.replicaset_status ? { a = local.nodes.a, b = local.nodes.b, c = local.nodes.c } : { a = local.nodes.a }

  mongodb_ip_addresses = var.replicaset_status ? "${google_compute_address.internal_ip["a"].address}:${var.default_port}, ${google_compute_address.internal_ip["b"].address}:${var.default_port}, ${google_compute_address.internal_ip["c"].address}:${var.default_port}" : "${google_compute_address.internal_ip["a"].address}:${var.default_port}"

  download_init_conf = templatefile("${path.module}/templates/download_configurations.tftpl", {
    bucket_name = var.default_bucket
    date_format = local.date_format
  })
}