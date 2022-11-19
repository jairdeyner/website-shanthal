const d = document;

const validarFormulario = () => {
  const $txtNombre = d.getElementById("txtNombre");
  const $txtMensaje = d.getElementById("txtMensaje");
  const $txtCorreo = d.getElementById("txtCorreo");
  const $form = d.getElementById("contact__form");

  let inputValues = {
    nombre: "",
    correo: "",
    mensaje: "",
  };

  [$txtNombre, $txtMensaje, $txtCorreo].forEach(($element) => {
    $element.addEventListener("input", function () {
      const { value, name } = this;

      inputValues = { ...inputValues, [name]: value.trim() };

      if (name === "nombre") {
        validarNombre();
      }

      if (name === "mensaje") {
        validarMensaje();
      }

      if (name === "correo") {
        validarCorreo();
      }
    });
  });

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    validarNombre();
    validarMensaje();
    validarCorreo();
  });

  const validarNombre = () => {
    const { nombre } = inputValues;
    if (nombre.length <= 0) {
      d.getElementById(`nombre__error`).classList.replace(
        "error__mesage--false",
        "error__mesage--true"
      );
      $txtNombre.classList.add("error__campo");
      return;
    }

    d.getElementById(`nombre__error`).classList.replace(
      "error__mesage--true",
      "error__mesage--false"
    );
    $txtNombre.classList.remove("error__campo");
  };

  const validarMensaje = () => {
    const { mensaje } = inputValues;
    if (mensaje.length <= 0) {
      d.getElementById(`mensaje__error`).classList.replace(
        "error__mesage--false",
        "error__mesage--true"
      );
      $txtMensaje.classList.add("error__campo");
      return;
    }

    d.getElementById(`mensaje__error`).classList.replace(
      "error__mesage--true",
      "error__mesage--false"
    );
    $txtMensaje.classList.remove("error__campo");
  };

  const validarCorreo = () => {
    const { correo } = inputValues;

    const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!re.exec(correo)) {
      d.getElementById(`correo__error`).classList.replace(
        "error__mesage--false",
        "error__mesage--true"
      );
      $txtCorreo.classList.add("error__campo");
      return;
    }

    $txtCorreo.classList.remove("error__campo");
    d.getElementById(`correo__error`).classList.replace(
      "error__mesage--true",
      "error__mesage--false"
    );
  };
};

validarFormulario();
