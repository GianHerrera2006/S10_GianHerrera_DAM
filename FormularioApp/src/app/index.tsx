import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function Index() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  // Expresiones regulares
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^[0-9]{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const validarFormulario = () => {
    setErrorNombre('');
    setErrorCorreo('');
    setErrorTelefono('');
    setErrorPassword('');
    setMensajeExito('');

    let valido = true;

    // Validar nombre
    if (nombre.trim() === '') {
      setErrorNombre('El nombre es obligatorio.');
      valido = false;
    } else if (!nombreRegex.test(nombre.trim())) {
      setErrorNombre('Ingresa mínimo 3 letras.');
      valido = false;
    }

    // Validar correo
    if (correo.trim() === '') {
      setErrorCorreo('El correo es obligatorio.');
      valido = false;
    } else if (!correoRegex.test(correo.trim())) {
      setErrorCorreo('Ingresa un correo válido.');
      valido = false;
    }

    // Validar teléfono
    if (telefono.trim() === '') {
      setErrorTelefono('El teléfono es obligatorio.');
      valido = false;
    } else if (!telefonoRegex.test(telefono.trim())) {
      setErrorTelefono('Debe contener 9 números.');
      valido = false;
    }

    // Validar contraseña
    if (password.trim() === '') {
      setErrorPassword('La contraseña es obligatoria.');
      valido = false;
    } else if (!passwordRegex.test(password)) {
      setErrorPassword('Mínimo 8 caracteres, una mayúscula y un número.');
      valido = false;
    }

    if (valido) {
      setMensajeExito('✓ Registro completado correctamente');
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1220" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>V</Text>
          </View>

          <Text style={styles.brand}>VALLE GRANDE</Text>
          <Text style={styles.headerDescription}>
            Crea tu cuenta para comenzar
          </Text>
        </View>

        {/* Tarjeta principal */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.titulo}>Crear cuenta</Text>
            <Text style={styles.subtitulo}>
              Completa tus datos para registrarte
            </Text>
          </View>

          {/* NOMBRE */}
          <View style={styles.field}>
            <Text style={styles.label}>Nombre completo</Text>

            <View
              style={[
                styles.inputContainer,
                errorNombre !== '' && styles.inputContainerError,
              ]}
            >
              <Text style={styles.inputIcon}>👤</Text>

              <TextInput
                style={styles.input}
                placeholder="Ej. Gian Herrera"
                placeholderTextColor="#94A3B8"
                value={nombre}
                onChangeText={(texto) => {
                  setNombre(texto);
                  setErrorNombre('');
                  setMensajeExito('');
                }}
              />
            </View>

            {errorNombre !== '' && (
              <Text style={styles.error}>• {errorNombre}</Text>
            )}
          </View>

          {/* CORREO */}
          <View style={styles.field}>
            <Text style={styles.label}>Correo electrónico</Text>

            <View
              style={[
                styles.inputContainer,
                errorCorreo !== '' && styles.inputContainerError,
              ]}
            >
              <Text style={styles.inputIcon}>✉</Text>

              <TextInput
                style={styles.input}
                placeholder="Ej. gian@gmail.com"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={correo}
                onChangeText={(texto) => {
                  setCorreo(texto);
                  setErrorCorreo('');
                  setMensajeExito('');
                }}
              />
            </View>

            {errorCorreo !== '' && (
              <Text style={styles.error}>• {errorCorreo}</Text>
            )}
          </View>

          {/* TELÉFONO */}
          <View style={styles.field}>
            <Text style={styles.label}>Número de teléfono</Text>

            <View
              style={[
                styles.inputContainer,
                errorTelefono !== '' && styles.inputContainerError,
              ]}
            >
              <Text style={styles.inputIcon}>☎</Text>

              <TextInput
                style={styles.input}
                placeholder="Ej. 987654321"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                maxLength={9}
                value={telefono}
                onChangeText={(texto) => {
                  setTelefono(texto);
                  setErrorTelefono('');
                  setMensajeExito('');
                }}
              />
            </View>

            {errorTelefono !== '' && (
              <Text style={styles.error}>• {errorTelefono}</Text>
            )}
          </View>

          {/* CONTRASEÑA */}
          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>

            <View
              style={[
                styles.inputContainer,
                errorPassword !== '' && styles.inputContainerError,
              ]}
            >
              <Text style={styles.inputIcon}>🔒</Text>

              <TextInput
                style={styles.input}
                placeholder="Ej. Password1"
                placeholderTextColor="#94A3B8"
                secureTextEntry
                value={password}
                onChangeText={(texto) => {
                  setPassword(texto);
                  setErrorPassword('');
                  setMensajeExito('');
                }}
              />
            </View>

            {errorPassword !== '' && (
              <Text style={styles.error}>• {errorPassword}</Text>
            )}
          </View>

          {/* BOTÓN */}
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPressed,
            ]}
            onPress={validarFormulario}
          >
            <Text style={styles.textoBoton}>CREAR CUENTA</Text>
            <Text style={styles.botonArrow}>→</Text>
          </Pressable>

          {/* MENSAJE DE ÉXITO */}
          {mensajeExito !== '' && (
            <View style={styles.exitoContainer}>
              <View style={styles.exitoIcon}>
                <Text style={styles.exitoIconText}>✓</Text>
              </View>

              <View style={styles.exitoContent}>
                <Text style={styles.exitoTitulo}>¡Todo listo!</Text>
                <Text style={styles.exito}>
                  {mensajeExito.replace('✓ ', '')}
                </Text>
              </View>
            </View>
          )}

          {/* REQUISITOS */}
          <View style={styles.requirements}>
            <Text style={styles.requirementsTitle}>
              Requisitos de registro
            </Text>

            <View style={styles.requirementRow}>
              <View style={styles.dot} />
              <Text style={styles.requirementText}>
                Nombre de mínimo 3 letras
              </Text>
            </View>

            <View style={styles.requirementRow}>
              <View style={styles.dot} />
              <Text style={styles.requirementText}>
                Correo electrónico válido
              </Text>
            </View>

            <View style={styles.requirementRow}>
              <View style={styles.dot} />
              <Text style={styles.requirementText}>
                Número de teléfono de 9 dígitos
              </Text>
            </View>

            <View style={styles.requirementRow}>
              <View style={styles.dot} />
              <Text style={styles.requirementText}>
                Contraseña con mayúscula y número
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Tus datos están protegidos y se utilizan únicamente para el registro.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0B1220',
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 42,
    paddingBottom: 30,
  },

  // HEADER
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },

  logoContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
  },

  headerDescription: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 7,
  },

  // CARD
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },

  cardHeader: {
    marginBottom: 8,
  },

  titulo: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },

  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 14,
  },

  // FIELDS
  field: {
    marginTop: 16,
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },

  inputContainer: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 13,
    paddingHorizontal: 14,
  },

  inputContainerError: {
    borderColor: '#EF4444',
    backgroundColor: '#FFF7F7',
  },

  inputIcon: {
    width: 28,
    fontSize: 17,
    textAlign: 'center',
    marginRight: 5,
    color: '#64748B',
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#0F172A',
  },

  error: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    marginLeft: 3,
  },

  // BUTTON
  boton: {
    height: 56,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 7,
  },

  botonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },

  botonArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '300',
    marginLeft: 12,
  },

  // SUCCESS
  exitoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 14,
    padding: 13,
    marginTop: 18,
  },

  exitoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  exitoIconText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },

  exitoContent: {
    flex: 1,
  },

  exitoTitulo: {
    color: '#047857',
    fontSize: 13,
    fontWeight: '800',
  },

  exito: {
    color: '#059669',
    fontSize: 12,
    marginTop: 2,
  },

  // REQUIREMENTS
  requirements: {
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
    padding: 15,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  requirementsTitle: {
    color: '#1E293B',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 10,
  },

  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2563EB',
    marginRight: 9,
  },

  requirementText: {
    flex: 1,
    color: '#64748B',
    fontSize: 11.5,
  },

  footer: {
    color: '#64748B',
    fontSize: 10.5,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    lineHeight: 16,
  },
});