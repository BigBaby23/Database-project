import mysql.connector

# Database connection details
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "Adegbayibi23",
    "database": "food_project"
}

# Connect to MySQL
try:
    connection = mysql.connector.connect(**db_config)
    if connection.is_connected():
        print("Connected to MySQL database.")

        cursor = connection.cursor()

        # Query the table
        cursor.execute("SELECT * FROM your_table_name;")
        rows = cursor.fetchall()

        # Display results
        for row in rows:
            print(row)

except mysql.connector.Error as e:
    print(f"Error connecting to MySQL: {e}")

finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection closed.")


