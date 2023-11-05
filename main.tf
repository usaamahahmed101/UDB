module "network_config" {
  source              = "./infrastructure/modules/network"
  default_network_rgn = var.rgn
}


module "gcs_buckets_config" {
  source                  = "./infrastructure/modules/gcs_bucket"
  default_bucket          = var.default_bucket
  default_bucket_location = var.default_location
}

module "bastion_config" {
  source          = "./infrastructure/modules/bastion"
  network_public  = module.network_config.network_public
  service_account = var.service_account
  default_zone    = var.default_zone
  admin_user      = var.admin_user
}

module "database_config" {
  source            = "./infrastructure/modules/database"
  network_private   = module.network_config.network_private
  default_bucket    = var.default_bucket
  db_logfile_path   = var.db_logfile_path
  db_datafiles_path = var.db_datafiles_path
  pid_file_path     = var.pid_file
  replicaset_name   = var.replica_name
  admin_user        = var.admin_user
  default_port      = var.port
  replicaset_status = var.replica_stat
  rgn               = var.rgn
  env               = var.env
  env_owner         = var.env_owner
  service_account   = var.service_account
  bastion_ip        = module.bastion_config.bastion_host_ip
}

module "web_engine_config" {
  source             = "./infrastructure/modules/engine"
  engine_type        = "web"
  network_private    = module.network_config.network_private
  interal_lb_address = module.network_config.internal_lb_ip
  default_bucket     = var.default_bucket
  admin_user         = var.admin_user
  env                = var.env
  env_owner          = var.env_owner
  service_account    = var.service_account
  bastion_ip         = module.bastion_config.bastion_host_ip
  rgn                = var.rgn
  min_nodes          = var.engine_min_nodes
  max_nodes          = var.engine_max_nodes
  artifact           = var.artifact
}

module "api_engine_config" {
  source             = "./infrastructure/modules/engine"
  engine_type        = "api"
  network_private    = module.network_config.network_private
  interal_lb_address = module.network_config.internal_lb_ip
  default_bucket     = var.default_bucket
  admin_user         = var.admin_user
  env                = var.env
  env_owner          = var.env_owner
  service_account    = var.service_account
  bastion_ip         = module.bastion_config.bastion_host_ip
  rgn                = var.rgn
  min_nodes          = var.engine_min_nodes
  max_nodes          = var.engine_max_nodes
  artifact           = var.artifact
}