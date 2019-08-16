using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using HelloWorldWebApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorldWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private static List<Car> Cars => new List<Car>
        {
            new Car {Id = 1, Brand = "BMW", Manufactured = 2010},
            new Car {Id = 2, Brand = "BMW", Manufactured = 2001},
            new Car {Id = 3, Brand = "Opel", Manufactured = 1997},
            new Car {Id = 4, Brand = "Audi", Manufactured = 2018},
            new Car {Id = 5, Brand = "Suzuki", Manufactured = 1995}
        };

        // GET api/cars
        [HttpGet]
        public ActionResult<IEnumerable<Car>> Get()
        {
            Thread.Sleep(5000);

            return Cars;
        }

        // GET api/cars/5
        [HttpGet("{id}")]
        public ActionResult<Car> Get(int id)
        {
            return Cars.FirstOrDefault(c => c.Id == id);
        }

        // POST api/cars
        [HttpPost]
        public void Post([FromBody] Car car)
        {
            Thread.Sleep(2000);

            Cars.Add(car);
        }

        // PUT api/cars/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Car car)
        {
            var oldCar = Cars.FirstOrDefault(c => c.Id == id);
            Cars.Remove(oldCar);
            Cars.Add(car);
        }

        // DELETE api/cars/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Cars.Remove(Cars.FirstOrDefault(c => c.Id == id));
        }
    }
}
