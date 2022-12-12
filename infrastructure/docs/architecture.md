# Overall Architecture 

## Purpose Overview 
The purpsose of this project is to be able to create integrated resources of the following on the GCP Platform:
1. VPC Network
2. Bastion Host
3. mongo database standalone instance/replica-set

## Pre-Requisites
In order for this code to work there is a number of steps to perform:
1. Create a GCP workspace account
2. Create a cloud identity account for your organisation
3. Create a project under your organisation
4. Grant appropriate IAM roles to your newly created project 
5. Enable compute engine API

## Architecture Overview
There are different modules assigned for different catagories of resources creates via terraform:
1. network module
2. gcs_bucket module
3. bastion Module
4. databse Module

### Network Module
The Network module does the following:
1. Creates a main VPC Network
2. Creates a public/private subnetwork under the main VPC
3. The public subnetwork is connected to the external internet while the private is as the name suggests - confined to the internal subnet within the VPC without any access from the internet
4. Configure Nat for the private subnetwork in order to have access to download required packages for the GCE instances
5. Configure appropriate firewall rules in order to maintain needed access between the resources that are to be created

### GCS_Bucket Module
The purpose of this module is to create the GCS bucket inorder to store the artifacts generated during the environment creation.

### Bastion Module
The purpose of this module is to create a GCE instance using the public subnet as a jump server in order to connect the outside world with the environment created within the private subnet.

### Database Module
The purpose of this module is to be able to create standalone/replica-set mongodb nodes in different zones for high-availability and disaster recovery situations.


