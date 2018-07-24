export default function logInfo(...messages) {
  console.log(`%c${messages.join``}`, 'background: #0a0; color: #fff; font-size: 18px;');
}
