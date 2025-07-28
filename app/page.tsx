"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  MapPin,
  Clock,
  Calendar,
  Gift,
  MessageCircle,
  Church,
  Users,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Building2,
  Utensils,
  Wine,
  Music,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function WeddingInvitationAlexYisela() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showMusicControls, setShowMusicControls] = useState(false)
  const [showAccountDialog, setShowAccountAccountDialog] = useState(false)

  // Countdown to December 22, 2025
  useEffect(() => {
    const weddingDate = new Date("2025-12-22T14:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const addToCalendar = () => {
    const startDate = "20251222T140000Z"
    const endDate = "20251222T230000Z"
    const title = "Boda Alex & Yisela"
    const details = "Ceremonia Religiosa y Civil - Alex & Yisela"
    const location = "Iglesia Señor de Pomallucay, Centro Poblado Pomallucay – San Luis"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`

    window.open(googleCalendarUrl, "_blank")
  }

  const toggleMusic = () => {
    const iframe = document.getElementById("background-music") as HTMLIFrameElement
    if (iframe) {
      if (isPlaying) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        setIsPlaying(false)
      } else {
        iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    const iframe = document.getElementById("background-music") as HTMLIFrameElement
    if (iframe) {
      if (isMuted) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', "*")
        setIsMuted(false)
      } else {
        iframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', "*")
        setIsMuted(true)
      }
    }
  }

  useEffect(() => {
    // Show music controls after 3 seconds
    const timer = setTimeout(() => {
      setShowMusicControls(true)
      setIsPlaying(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/sage-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10">
        {/* Background Music */}
        <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none">
          <iframe
            id="background-music"
            width="0"
            height="0"
            src="https://www.youtube.com/embed/w8SOcXfnQ_8?enablejsapi=1&autoplay=1&loop=1&playlist=w8SOcXfnQ_8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Music"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{ opacity: 0, position: "absolute", top: "-9999px" }}
          />
        </div>

        {/* Music Controls - Optimized for mobile */}
        {showMusicControls && (
          <div className="fixed top-4 right-4 z-50 bg-white/98 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-sage-200">
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMusic}
                className="rounded-full w-7 h-7 p-0 hover:bg-sage-100"
                title={isPlaying ? "Pausar música" : "Reproducir música"}
              >
                {isPlaying ? <Pause className="w-3 h-3 text-sage-600" /> : <Play className="w-3 h-3 text-sage-600" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMute}
                className="rounded-full w-7 h-7 p-0 hover:bg-sage-100"
                title={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? (
                  <VolumeX className="w-3 h-3 text-sage-600" />
                ) : (
                  <Volume2 className="w-3 h-3 text-sage-600" />
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Music Notification - More compact for mobile */}
        {showMusicControls && isPlaying && (
          <div className="fixed top-16 right-4 z-40 bg-white/98 border border-sage-200 rounded-lg p-2 shadow-lg max-w-xs sm:max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-sage-400 rounded-full animate-pulse"></div>
              <div className="text-xs">
                <p className="font-medium text-sage-800">♪ La Promesa - Melendi</p>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section - Now a Card */}
        <section className="relative py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-sm rounded-2xl shadow-lg border border-sage-100 relative" style={{
              backgroundImage: "url(/background_white.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
            }} >
              <CardContent className="p-10">
                <div className="mb-12 sm:mb-16">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-px bg-sage-300"></div>
                    <div className="mx-4 w-2 h-2 bg-sage-400 rounded-full"></div>
                    <div className="w-16 h-px bg-sage-300"></div>
                  </div>

                  <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-light text-sage-500 mb-8 sm:mb-12 tracking-wide relative"
                    style={{ fontFamily: "var(--font-parisienne)" }}
                  >
                    ¡Nos Casamos!
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-sage-300"></div>
                  </h1>

                  <div className="relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent"></div>

                    <h2
                      className="text-4xl sm:text-6xl md:text-8xl font-serif text-sage-600 mb-4 relative"
                      style={{ fontFamily: "var(--font-parisienne)" }}
                    >
                      Alex
                      <div className="absolute -right-8 top-4 w-4 h-4 border border-sage-300 rounded-full opacity-30"></div>
                    </h2>

                    <div className="flex items-center justify-center my-4 sm:my-6">
                      <div className="w-6 sm:w-8 h-px bg-sage-300"></div>
                      <div className="mx-3 sm:mx-4 text-2xl sm:text-4xl text-sage-400 font-light">&</div>
                      <div className="w-6 sm:w-8 h-px bg-sage-300"></div>
                    </div>

                    <h2
                      className="text-4xl sm:text-6xl md:text-8xl font-serif text-sage-600 relative"
                      style={{ fontFamily: "var(--font-parisienne)" }}
                    >
                      Yisela
                      <div className="absolute -left-8 top-4 w-4 h-4 border border-sage-300 rounded-full opacity-30"></div>
                    </h2>

                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent"></div>
                  </div>

                  <div className="flex items-center justify-center mt-12">
                    <div className="w-16 h-px bg-sage-300"></div>
                    <div className="mx-4 w-2 h-2 bg-sage-400 rounded-full"></div>
                    <div className="w-16 h-px bg-sage-300"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Parents section with enhanced styling */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-sage-400" strokeWidth={1} />
              </div>
            </div>
            <h2 className="text-4xl font-serif text-sage-600 mb-8" style={{ fontFamily: "var(--font-parisienne)" }}>
              Nuestros Padres
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-sage-100 relative">
              <CardContent className="p-8">
                <p className="text-xl text-sage-600 mb-10 font-light" style={{ fontFamily: "var(--font-parisienne)" }}>
                  Con la bendición de Dios y nuestros queridos padres
                </p>

                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div className="text-center">
                    <div className="w-12 h-px bg-sage-200 mx-auto mb-4"></div>
                    <h3
                      className="font-semibold text-gray-800 mb-4 text-lg"
                      style={{ fontFamily: "var(--font-parisienne)" }}
                    >
                      Padres de la Novia
                    </h3>
                    <p className="text-gray-700 font-light mb-1">Fortunato Durand Vargas</p>
                    <p className="text-gray-700 font-light">Victoria Leyva Silvestre</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-px bg-sage-200 mx-auto mb-4"></div>
                    <h3
                      className="font-semibold text-gray-800 mb-4 text-lg"
                      style={{ fontFamily: "var(--font-parisienne)" }}
                    >
                      Padres del Novio
                    </h3>
                    <p className="text-gray-700 font-light mb-1">Macario Espinoza Gaspar</p>
                    <p className="text-gray-700 font-light">Celestina Luna Venturo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wedding date section with enhanced styling */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-sage-400" strokeWidth={1} />
              </div>
            </div>
            <h2 className="text-4xl font-serif text-sage-600 mb-8" style={{ fontFamily: "var(--font-parisienne)" }}>
              Fecha de la Boda
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-sage-100 relative">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed">
                  Con inmensa alegría, queremos invitarte a compartir uno de los momentos más importantes de nuestras
                  vidas.
                </p>

                <div className="flex flex-col items-center mb-10">
                  <p className="text-3xl font-light text-gray-800 mb-6">Lunes 22 de diciembre de 2025</p>
                  <Button
                    onClick={addToCalendar}
                    className="bg-gradient-to-r from-sage-400 to-sage-500 hover:from-sage-500 hover:to-sage-600 text-white border-0 rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    📆 Agendar fecha
                  </Button>
                </div>

                {/* Enhanced countdown - Mobile optimized */}
                <div className="bg-gradient-to-br from-sage-50 to-white rounded-xl p-4 sm:p-8 border border-sage-100 shadow-inner">
                  <p className="text-lg sm:text-xl font-light text-gray-800 mb-4 sm:mb-6">⏳ Faltan:</p>
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm border border-sage-100">
                      <div className="text-xl sm:text-3xl font-light text-sage-600 mb-1">{timeLeft.days}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">D</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm border border-sage-100">
                      <div className="text-xl sm:text-3xl font-light text-sage-600 mb-1">{timeLeft.hours}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">H</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm border border-sage-100">
                      <div className="text-xl sm:text-3xl font-light text-sage-600 mb-1">{timeLeft.minutes}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">M</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm border border-sage-100">
                      <div className="text-xl sm:text-3xl font-light text-sage-600 mb-1">{timeLeft.seconds}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">S</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ceremonies Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Religious Ceremony */}
              <Card className="bg-white/95 backdrop-blur-sm border border-sage-100 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                      <Church className="w-8 h-8 text-sage-400" strokeWidth={1} />
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-serif text-sage-600 mb-6"
                    style={{ fontFamily: "var(--font-parisienne)" }}
                  >
                    Ceremonia Religiosa
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-sage-400" strokeWidth={1} />
                      <span className="font-medium">Hora:</span>
                      <span className="font-light">2:00 p.m.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-sage-400 mt-1" strokeWidth={1} />
                      <div>
                        <p className="font-medium">Iglesia Señor de Pomallucay</p>
                        <p className="text-sm text-gray-600 font-light">Centro Poblado Pomallucay – San Luis</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 border-sage-200 text-sage-600 hover:bg-sage-50 rounded-full bg-transparent"
                          onClick={() => window.open("https://maps.app.goo.gl/pJtWpgnU2suw9S5U9", "_blank")}
                        >
                          Ver mapa
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Civil Ceremony */}
              <Card className="bg-white/95 backdrop-blur-sm border border-sage-100 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-sage-400" strokeWidth={1} />
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-serif text-sage-600 mb-6"
                    style={{ fontFamily: "var(--font-parisienne)" }}
                  >
                    Ceremonia Civil y Recepción
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-sage-400" strokeWidth={1} />
                      <span className="font-medium">Hora:</span>
                      <span className="font-light">5:00 p.m.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-sage-400 mt-1" strokeWidth={1} />
                      <div>
                        <p className="font-medium">Teatrín</p>
                        <p className="text-sm text-gray-600 font-light">Centro Poblado de Humanhuauco – San Luis</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 border-sage-200 text-sage-600 hover:bg-sage-50 rounded-full bg-transparent"
                          onClick={() => window.open("https://maps.app.goo.gl/8fzE7xk9GnjftVMj7", "_blank")}
                        >
                          Ver mapa
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-sage-400" strokeWidth={1} />
              </div>
            </div>
            <h2 className="text-4xl font-serif text-sage-600 mb-8" style={{ fontFamily: "var(--font-parisienne)" }}>
              Itinerario
            </h2>
            <Card className="bg-white/90 backdrop-blur-sm border border-sage-100 shadow-sm">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sage-200"></div>

                  <div className="space-y-8">
                    {/* Religious Ceremony */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Church className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">2:00 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Ceremonia Religiosa</p>
                        </div>
                      </div>
                    </div>

                    {/* Reception */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Building2 className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">6:00 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Recepción</p>
                        </div>
                      </div>
                    </div>

                    {/* Civil Ceremony */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Heart className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">6:30 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Ceremonia Civil</p>
                        </div>
                      </div>
                    </div>

                    {/* Toast */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Wine className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">7:15 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Brindis</p>
                        </div>
                      </div>
                    </div>

                    {/* Waltz */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Music className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">7:40 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Vals</p>
                        </div>
                      </div>
                    </div>

                    {/* Dinner */}
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 bg-sage-400 rounded-full border-4 border-white shadow-sm z-10"></div>
                      <div className="flex items-center gap-4">
                        <Utensils className="w-6 h-6 text-sage-400" strokeWidth={1} />
                        <div>
                          <p className="font-medium">8:30 p.m.</p>
                          <p className="text-sm text-gray-600 font-light">Cena</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gifts Section */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-sage-400" strokeWidth={1} />
              </div>
            </div>
            <h2 className="text-4xl font-serif text-sage-600 mb-8" style={{ fontFamily: "var(--font-parisienne)" }}>
              Regalos
            </h2>

            <Card className="bg-white/95 backdrop-blur-sm border border-sage-100 shadow-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-8 font-light">
                  El mejor regalo es que estés presente en este día tan esperado, pero si deseas hacernos un obsequio
                  tenemos estas opciones:
                </p>
                <div className="flex justify-center">
                  <Dialog open={showAccountDialog} onOpenChange={setShowAccountAccountDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-sage-400 hover:bg-sage-500 text-white border-0 rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-200">
                        💳 N° de cuenta
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md mx-4 rounded-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle
                          className="text-center text-sage-600 text-xl font-serif"
                          style={{ fontFamily: "var(--font-parisienne)" }}
                        >
                          Información de Cuentas
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 p-4">
                        {/* BBVA Account */}
                        <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">BBVA</span>
                            </div>
                          </div>
                          <div className="space-y-3 text-center">
                            <div>
                              <p className="font-medium text-gray-800">
                                <span className="font-bold">Nro:</span> 0011-0195-0200722126
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                <span className="font-bold">CCI:</span> 011-195-000200722126-56
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* BCP Account */}
                        <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-red-600 font-bold text-sm">BCP</span>
                            </div>
                          </div>
                          <div className="space-y-3 text-center">
                            <div>
                              <p className="font-medium text-gray-800">
                                <span className="font-bold">Nro:</span> 19174961912001
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">
                                <span className="font-bold">CCI:</span> 00219117496191200158
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center pt-4">
                          <p className="text-sm text-gray-600 font-light">¡Gracias por tu generosidad! 💝</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-sage-600 mb-8" style={{ fontFamily: "var(--font-parisienne)" }}>
              Confirmar asistencia
            </h2>
            <div className="w-16 h-0.5 bg-sage-300 mx-auto mb-8"></div>

            <Card className="bg-white/95 backdrop-blur-sm border border-sage-100 shadow-sm">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" strokeWidth={1} />
                <p className="text-lg text-gray-700 mb-6 font-light">
                  Tu presencia es muy importante para nosotros. Por favor confirma tu asistencia{" "}
                  <span className="font-medium text-sage-600">antes del 10 de diciembre</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
                    onClick={() =>
                      window.open(
                        "https://wa.me/51926814223?text=Hola%20Alex,%20confirmo%20mi%20asistencia%20a%20tu%20boda",
                        "_blank",
                      )
                    }
                  >
                    💬 WhatsApp del Novio
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
                    onClick={() =>
                      window.open(
                        "https://wa.me/56930294873?text=Hola%20Yisela,%20confirmo%20mi%20asistencia%20a%20tu%20boda",
                        "_blank",
                      )
                    }
                  >
                    💬 WhatsApp de la Novia
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center bg-gradient-to-r from-sage-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <Heart className="w-8 h-8 text-sage-400 mx-auto mb-4" strokeWidth={1} />
            <p className="text-gray-600 font-light text-lg">Alex & Yisela • 22 de diciembre de 2025</p>
            <p className="text-gray-500 text-sm mt-2 font-light">Con amor y bendiciones ✨</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
