/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MONGO_URI:"mongodb+srv://mohsin:ASDFGHJKL@cluster0.xnasmj8.mongodb.net/mmm?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
