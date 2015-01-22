class system-update {
  exec { 'apt-get update':
    command => 'apt-get update',
  }

  $sysPackages = [ "build-essential", "git" ]
  package { $sysPackages:
    ensure => "installed",
    require => Exec['apt-get update'],
  }
}
