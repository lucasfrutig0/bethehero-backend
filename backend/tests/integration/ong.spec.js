const request = require('supertest') //chamadas a api teste
const app = require('../../src/app') //importa a aplicação
const connection = require('../../src/database/connection') //conecção com banco de dados


// teste cadastro de ONG
describe('ONG', () => {
  beforeEach( async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll( async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "apad@apad.com.br",
        whatsapp: '1788992222',
        city: 'Bebedouro',
        uf: 'SP'
      })
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
  });
  
});
