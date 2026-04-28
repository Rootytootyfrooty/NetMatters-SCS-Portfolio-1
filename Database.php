<?php

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

class Database {
    private $config;
    private $connection;
    protected $statement;
    //reference .env variables
    public function __construct() {
        $this->config = [
            'dbname' => $_ENV['DATABASE_NAME'],
            'username' => $_ENV['USERNAME'],
            'password' => $_ENV['PASSWORD'],
            'host' => $_ENV['HOST']
        ];
    }
    //use variables from config array
    public function connect() {
        if ($this->connection === null) {
            $dsn = "mysql:host={$this->config['host']};dbname={$this->config['dbname']};charset=utf8mb4";
        
            $this->connection = new PDO(
                $dsn,
                $this->config['username'],
                $this->config['password'],
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                    
                ]
            );
        }
        
        return $this->connection;
    }
    
    public function query($query, $params = []) {
        $this->connect();

        $statement = $this->connection->prepare($query);

        $statement->execute($params);

        return $statement->fetchAll(PDO::FETCH_COLUMN);
    }
    
    public function queryAll($query, $params = []) {
        $this->connect();

        $statement = $this->connection->prepare($query);

        $statement->execute($params);

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function fetch() {
        return $this->statement->fetch(PDO::FETCH_ASSOC);
    }

    public function fetchAll() {
        return $this->statement->fetchAll(PDO::FETCH_ASSOC);
    }
}


?>