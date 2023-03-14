// EMPLEADOS DE LA CERVECERIA - PROMEDIO DE SALARIO DE LOS EMPLEADOS Y FILTRADO DE LA PERSONAS Q REUNEN UNA CONDICION O CARGO ESPECIFICO//

class Empleado {
   constructor(nombreEmpleado, edadEmpleado, cargoEmpleado, salarioNeto, antiguedadAnios) {
     this.nombreEmpleado = nombreEmpleado;
     this.edadEmpleado = edadEmpleado;
     this.cargoEmpleado = cargoEmpleado;
     this.salarioNeto = salarioNeto;
     this.antiguedadAnios = antiguedadAnios;
   }
  }
  function ingresoEmpleados () {
    let numeroEmpleados = parseInt (
      prompt ("Cuantos empleados tiene la empresa?")
    )
    const empleados = [];
    for (let index = 0; index < numeroEmpleados; index++) {
    let nombreEmpleado = prompt("Ingrese su nombre completo");
    let edadEmpleado = parseFloat(prompt("Ingrese su edad"));
    while (isNaN(edadEmpleado)) {
      edadEmpleado = parseFloat(prompt("La edad debe ser un número. Por favor ingrese su edad"));
    }
    let cargoEmpleado = prompt("Ingrese su cargo en la Cerveceria Bariloche").toUpperCase();
    let salarioNeto = parseFloat(prompt("Ingrese su salario neto en la Cerveceria Bariloche"));
    while (isNaN(salarioNeto)) {
      salarioNeto = parseFloat(prompt("El salario neto debe ser un número. Por favor ingrese su salario neto"));
    }
    let antiguedadAnios = parseFloat(prompt("Ingrese su antigüedad en la Cerveceria Bariloche"));
    while (isNaN(antiguedadAnios)) {
      antiguedadAnios = parseFloat(prompt("La antigüedad debe ser un número. Por favor ingrese su antigüedad en la empresa"));
    }
    let ingresoEmpleados = new Empleado(
    nombreEmpleado,
    edadEmpleado,
    cargoEmpleado,
    salarioNeto,
    antiguedadAnios);
    empleados.push(ingresoEmpleados);
  }
    return (empleados)
    }
    function promedioSalarioEmpleados(empleados) {
      const salarios = empleados.map((empleado) => parseFloat(empleado.salarioNeto)).filter((salario) => !isNaN(salario));
      const totalSalarios = salarios.reduce((total, salario) => total + salario, 0);
      const promedioSalarios = totalSalarios / salarios.length;
      return promedioSalarios;
    }
    const empleados = ingresoEmpleados();
    let promedioSalarios = promedioSalarioEmpleados(empleados);
    console.log(`El promedio de salarios de los empleados es ${promedioSalarios.toFixed(2)}`);

    let cargoFiltrado = prompt("Ingrese el cargo jerarquico de empleado a filtrar").toUpperCase();
    let empleadosFiltrados = empleados.filter(empleado => empleado.cargoEmpleado === cargoFiltrado);
    console.log(`Los empleados con el cargo ${cargoFiltrado} son: ${empleadosFiltrados.map(empleado => empleado.nombreEmpleado).join(", ")}`);
    let cargoExiste = empleados.some ((elemento)=> elemento.cargoEmpleado === "GERENTE")
    console.log(cargoExiste)
   


   



