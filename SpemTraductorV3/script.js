// Función para desencriptar el texto
function decrypt() {
    var encryptedText = document.getElementById("encrypted").value;

    // Diccionario del SpemCode
    var substitutionDict = {
        'a': 'a', 'A': 'A',
        'c': 'b', 'C': 'B',
        'd': 'c', 'D': 'C',
        'f': 'd', 'F': 'D',
        '3': 'e',
        'g': 'f', 'G': 'F',
        'h': 'g', 'H': 'G',
        'j': 'h', 'J': 'H',
        'i': 'i', 'I': 'I',
        'k': 'j', 'K': 'J',
        'l': 'k', 'L': 'K',
        'n': 'l', 'N': 'L',
        '4': 'm',
        'q': 'n', 'Q': 'N',
        'o': 'o', 'O': 'O',
        '2': 'p',
        'r': 'q', 'R': 'Q',
        't': 'r', 'T': 'R',
        '1': 's',
        'v': 't', 'V': 'T',
        'u': 'u', 'U': 'U',
        'w': 'v', 'W': 'V',
        'x': 'w', 'X': 'W',
        'y': 'x', 'Y': 'X',
        'z': 'y', 'Z': 'Y',
        'b': 'z', 'B': 'Z',
        's': '1', 'S': '1',
        'p': '2', 'P': '2',
        'e': '3', 'E': '3',
        'm': '4', 'M': '4',
    };

    var decryptedText = "";

    for (var i = 0; i < encryptedText.length; i++) {
        var char = encryptedText[i];
        var decryptedChar = substitutionDict[char] || char;
        decryptedText += decryptedChar;
    }

    document.getElementById("original").value = decryptedText;
}

// Función para encriptar el texto
function encrypt() {
    var decryptedText = document.getElementById("original").value;

    // Diccionario del SpemCode
    var substitutionDict = {
        'a': 'a', 'A': 'A',
        'b': 'c', 'B': 'C',
        'c': 'd', 'C': 'D',
        'd': 'f', 'D': 'F',
        'e': '3', 'E': '3',
        'f': 'g', 'F': 'G',
        'g': 'h', 'G': 'H',
        'h': 'j', 'H': 'J',
        'i': 'i', 'I': 'I',
        'j': 'k', 'J': 'K',
        'k': 'l', 'K': 'L',
        'l': 'n', 'L': 'N',
        'm': '4', 'M': '4',
        'n': 'q', 'N': 'Q',
        'o': 'o', 'O': 'O',
        'p': '2', 'P': '2',
        'q': 'r', 'Q': 'R',
        'r': 't', 'R': 'T',
        's': '1', 'S': '1',
        't': 'v', 'T': 'V',
        'u': 'u', 'U': 'U',
        'v': 'w', 'V': 'W',
        'w': 'x', 'W': 'X',
        'x': 'y', 'X': 'Y',
        'y': 'z', 'Y': 'Z',
        'z': 'b', 'Z': 'B',
        '1': 's',
        '2': 'p',
        '3': 'e',
        '4': 'm',
    };

    var encryptedText = "";

    for (var i = 0; i < decryptedText.length; i++) {
        var char = decryptedText[i];
        var encryptedChar = substitutionDict[char] || char;
        encryptedText += encryptedChar;
    }

    document.getElementById("encrypted").value = encryptedText;
}

// Función para copiar el texto original
function copyOriginal() {
    const original = document.getElementById('original');
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(original.value)
            .then(() => showMessage('Texto original copiado al portapapeles'));
    } else {
        // Fallback para navegadores antiguos
        original.select();
        document.execCommand('copy');
        showMessage('Texto original copiado al portapapeles');
        window.getSelection().removeAllRanges();
    }
}

// Función para copiar el texto encriptado
function copyEncrypted() {
    const encrypted = document.getElementById('encrypted');
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(encrypted.value)
            .then(() => showMessage('Texto encriptado copiado al portapapeles'));
    } else {
        // Fallback para navegadores antiguos
        encrypted.select();
        document.execCommand('copy');
        showMessage('Texto encriptado copiado al portapapeles');
        window.getSelection().removeAllRanges();
    }
}

// Función para limpiar ambos cuadros de texto
function clearTextareas() {
    document.getElementById('original').value = '';
    document.getElementById('encrypted').value = '';
    showMessage('Campos limpios');
}


// Función para mostrar un mensaje temporal
function showMessage(msg) {
    let messageDiv = document.getElementById('copy-message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'copy-message';
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = '#7a2c17';
        messageDiv.style.color = '#fff';
        messageDiv.style.padding = '20px 48px';
        messageDiv.style.borderRadius = '16px';
        messageDiv.style.fontSize = '1.7em';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
        messageDiv.style.zIndex = '9999';
        messageDiv.style.display = 'none';
        messageDiv.style.textAlign = 'center';
        document.body.appendChild(messageDiv);
    }
    messageDiv.textContent = msg;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 1400);
}