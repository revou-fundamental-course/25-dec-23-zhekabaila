const REGEX = /^[0-9]+$/

const hitungLuas = (panjangAlas, tinggi) => {
  return (1 / 2) * panjangAlas * tinggi
}

const hitungKeliling = (sisiA, sisiB, sisiC) => {
  return sisiA + sisiB + sisiC
}

const luasForm = document.getElementById('luas-form')
const kelilingForm = document.getElementById('keliling-form')

document.getElementById('validation-error-luas').style.display = 'none'

luasForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const alas = document.getElementById('alas').value
  const tinggi = document.getElementById('tinggi').value

  if (!REGEX.test(alas) || !REGEX.test(tinggi)) {
    document.getElementById('validation-error-luas').style.display = 'block'
    return
  }

  document.getElementById('validation-error-luas').style.display = 'none'

  const luas = hitungLuas(Number(alas), Number(tinggi))

  document.getElementById('hasil-luas').style.display = 'block'

  document.getElementById('hasil-alas').innerText = alas
  document.getElementById('hasil-tinggi').innerText = tinggi
  document.getElementById('luas').innerText = luas
})

document.getElementById('validation-error').style.display = 'none'

kelilingForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const sisiA = document.getElementById('sisiA').value
  const sisiB = document.getElementById('sisiB').value
  const sisiC = document.getElementById('sisiC').value

  if (!REGEX.test(sisiA) || !REGEX.test(sisiB) || !REGEX.test(sisiC)) {
    document.getElementById('validation-error').style.display = 'block'
    return
  }

  document.getElementById('validation-error').style.display = 'none'

  const keliling = hitungKeliling(Number(sisiA), Number(sisiB), Number(sisiC))

  document.getElementById('hasil-keliling').style.display = 'block'

  document.getElementById('S1').innerText = sisiA
  document.getElementById('S2').innerText = sisiB
  document.getElementById('S3').innerText = sisiC

  document.getElementById('keliling').innerText = keliling
})

const resetLuasForm = () => {
  luasForm.reset()
  document.getElementById('hasil-luas').style.display = 'none'
  document.getElementById('validation-error-luas').style.display = 'none'
}

const resetKelilingForm = () => {
  kelilingForm.reset()
  document.getElementById('hasil-keliling').style.display = 'none'
  document.getElementById('validation-error').style.display = 'none'
}
