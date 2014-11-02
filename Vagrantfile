# -*- mode: ruby -*-
# vi: set ft=ruby :

BOX_NAME = ENV['BOX_NAME'] || "ubuntu/trusty"
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = BOX_NAME

  config.vm.network "forwarded_port", guest: 80, host: 8080

  #config.vm.synced_folder "server", "/var/www/charlestonjs/server"
  #config.vm.synced_folder "client", "/var/www/charlestonjs/client"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "charlestonjs"
  end

  config.vm.provision "ansible" do |ansible|
    ansible.verbose = "v"
    ansible.playbook = "ansible/playbook.yml"
  end
end
