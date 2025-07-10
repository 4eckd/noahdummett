import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function readingTime(text: string) {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const timeInMinutes = Math.ceil(words / wordsPerMinute)
  return `${timeInMinutes} min read`
}

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function truncateHash(hash: string, length: number = 8) {
  if (hash.length <= length * 2) return hash
  return `${hash.slice(0, length)}...${hash.slice(-length)}`
}

export function getEvidenceTypeColor(type: string) {
  const colors = {
    blockchain: "text-blue-400",
    legal: "text-purple-400", 
    testimonial: "text-green-400",
    financial: "text-red-400",
    platform: "text-orange-400",
    default: "text-gray-400"
  }
  
  return colors[type as keyof typeof colors] || colors.default
}

export function getEvidenceSeverity(severity: string) {
  const severities = {
    critical: "bg-red-500/20 text-red-400 border-red-500/30",
    high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    low: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  }
  
  return severities[severity as keyof typeof severities] || severities.medium
}
