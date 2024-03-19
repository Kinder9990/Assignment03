const {
  addStudent,
  updateStudentEmail,
  deleteStudent,
  getAllStudents,
} = require("./CRUD/operations");
const { Client } = require("pg");
const readline = require("readline");

async function main() {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;
  const PORT = process.env.PORT;

  // load values from .env to pass it to pg client to open a connection
  const client = new Client({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: PORT,
  });

  try {
    await client.connect();

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });  // for command line

    const askUserChoice = () => {
      console.log("1. Insert a student");
      console.log("2. Update a student");
      console.log("3. Delete a student");
      console.log("4. Read all students");
      console.log("Press 'q' to quit");

      rl.question("Enter your choice (1-4): ", async (choice) => {
        switch (choice) {
          case "1":
            rl.question("Enter first name: ", async (firstName) => {
              rl.question("Enter last name: ", async (lastName) => {
                rl.question("Enter email: ", async (email) => {
                  rl.question(
                    "Enter enrollment date (YYYY-MM-DD): ",
                    async (enrollmentDate) => {
                      await addStudent(
                        firstName,
                        lastName,
                        email,
                        enrollmentDate,
                        client
                      );
                      askUserChoice();
                    }
                  );
                });
              });
            });
            break;
          case "2":
            rl.question("Enter student ID to update: ", async (id) => {
              rl.question("Enter updated email: ", async (email) => {
                await updateStudentEmail(id, email, client);
                askUserChoice();
              });
            });
            break;
          case "3":
            rl.question("Enter student ID to delete: ", async (id) => {
              await deleteStudent(id, client);
              askUserChoice();
            });
            break;
          case "4":
            await getAllStudents(client);
            askUserChoice();
            break;
          case "q":
            rl.close();
            client.end();
            break;
          default:
            console.log("Invalid choice");
            askUserChoice(); 
        }
      });
    };

    askUserChoice(); 
  } catch (error) {
    console.error("Error:", error);
    client.end();
  }
}

main();
