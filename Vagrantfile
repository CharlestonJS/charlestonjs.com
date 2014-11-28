# -*- mode: ruby -*-
# vi: set ft=ruby :

BOX_NAME = ENV['BOX_NAME'] || "ubuntu/trusty"
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = BOX_NAME

  config.vm.network "forwarded_port", guest: 9000, host: 9000
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.synced_folder "api", "/var/www/html/charlestonjs/api"
  config.vm.synced_folder "client", "/var/www/html/charlestonjs/client"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "charlestonjs"
  end

  config.vm.provision "ansible" do |ansible|
    ansible.verbose = "v"
    ansible.playbook = "ansible/playbook.yml"
  end
end
