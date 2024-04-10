export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (e) {
    return [String(e), 'Guardrail was processed'];
  }
}
