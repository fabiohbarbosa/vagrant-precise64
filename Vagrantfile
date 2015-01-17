Vagrant.configure("2") do |config|
    config.vm.box = "precise64"
    config.vm.box_url = "http://files.vagrantup.com/precise64.box"
    config.vm.network :private_network, ip: "192.168.33.101"
    config.vm.synced_folder "./", "/vagrant", id: "vagrant-root"
    # Example of excute shell script and shell line
    config.vm.provision :shell, :path => "test.sh"
    # config.vm.provision :shell, :inline => "echo Hello, World"

    config.vm.provision :puppet do |puppet|
      puppet.manifests_path = "puppet/manifests"
      puppet.options = ['--verbose']
      puppet.module_path = "puppet/modules"
    end
end
