import express, { Request, Response } from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = './users.json';

interface User {
  username: string;
  password: string;
}

const readUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(USERS_FILE, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
};

const writeUsers = (users: User[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), err => {
      if (err) return reject(err);
      resolve();
    });
  });
};

// Login endpoint
app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const users = await readUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Signup endpoint
// app.post('/signup', async (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   try {
//     const users = await readUsers();
//     if (users.find(u => u.username === username)) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     users.push({ username, password });
//     await writeUsers(users);
//     res.json({ message: 'Signup successful' });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3000/0`);
});
