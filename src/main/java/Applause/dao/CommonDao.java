package Applause.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class CommonDao {
	final String DB_URL = "jdbc:mysql://localhost:3306/applause";
	final String USERNAME = "root";
	final String PASSWORD = "Audatex123";
	final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	Connection connection = null;
    PreparedStatement prepStatement = null;
}
