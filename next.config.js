/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [{ source: '/index.html', destination: '/', permanent: true }]
  },
}
