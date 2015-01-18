Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }

# Node
class { 'nodejs':
  version => 'stable',
  with_npm => false,
}

class node_modules {

  $node_packages = [  'npm', 'yo', 'bower', 'grunt-cli',
                      'gulp', 'express', 'mongoose',
                      'generator-express', 'generator-angular'  ]

  package { $node_packages:
    provider => 'npm',
    require  => Class['nodejs']
  }
}

# Mongodb
class mongo_databases {
  mongodb::db { 'development':
    user          => 'development',
    password      => 'development',
  }
  mongodb::db { 'test':
    user          => 'test',
    password      => 'test',
  }
    mongodb::db { 'production':
    user          => 'production',
    password      => 'production',
  }
}


# Include modules
include system-update

include stdlib
include wget
include nodejs
include node_modules

include ::mongodb::server
include mongo_databases
