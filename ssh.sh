#!/usr/bin/env bash
user=usaamahahmed
while getopts ":i:b:u:" flag; 
do
    case "$flag" in
        i) ip=${OPTARG};;
        b) bastion=${OPTARG};;
        u) user=${OPTARG};;
    esac
done
rm -f ~/.ssh/known_hosts
echo "ssh -o ProxyCommand="ssh -W %h:%p -q $user@$bastion -i ~/.ssh/id_rsa" -i ~/.ssh/id_rsa $user@$ip"
ssh -o ProxyCommand="ssh -W %h:%p -q $user@$bastion -i ~/.ssh/id_rsa" -i ~/.ssh/id_rsa $user@$ip