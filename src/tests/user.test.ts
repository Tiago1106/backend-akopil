import request from 'supertest';
import { app } from '../server'; // Importando o app com a exportação nomeada

beforeAll(async () => {
  // Limpar banco de dados antes dos testes
});

afterAll(async () => {
  // Fechar conexão com o banco de dados
});

describe('User API', () => {
  it('should create a user', async () => {
    const response = await request(app)
      .post('/user/')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John Doe');
    expect(response.body.email).toBe('johndoe@example.com');
  });

  it('should fetch all users', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should fetch authenticated user', async () => {
    const response = await request(app).post('/auth').send({
      email: 'johndoe@example.com',
      password: 'password123',
    })
    expect(response.status).toBe(200);
  })
});