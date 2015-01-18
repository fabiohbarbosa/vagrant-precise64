Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

# Node
class { 'nodejs':
  version => 'stable',
  with_npm => false,
}

class node_modules {

  $node_packages = [  "npm", "yo", "bower", "grunt-cli",
                      "gulp", "express", "express-generator",
                      "mongoose"  ]

  package { $node_packages:
    provider => 'npm',
    require  => Class['nodejs']
  }
}

# Include modules
include system-update
include nodejs
include stdlib
include wget
include ::mongodb::server
include node_modules
