import React from 'react'

const About = () => {
  return (
    <div>
          <section  className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto max-w-6xl">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                      <div>
                          <h2  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                              About <span className="text-blue-400">Bliq</span>
                          </h2>
                          <div  className="space-y-6 text-base sm:text-lg text-gray-300">
                              <p>
                                  We are a forward-thinking design agency that specializes in creating extraordinary digital experiences.
                                  Our team combines creativity with cutting-edge technology to deliver solutions that not only look
                                  stunning but also drive results.
                              </p>
                              <p>
                                  With over a decade of experience, we've helped brands across the globe establish their digital presence
                                  and connect with their audiences in meaningful ways.
                              </p>
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">50+</div>
                              <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
                          </div>
                          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">50+</div>
                              <div className="text-gray-300 text-sm sm:text-base">Happy Clients</div>
                          </div>
                          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">10+</div>
                              <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
                          </div>
                          <div className="text-center p-4 sm:p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">25+</div>
                              <div className="text-gray-300 text-sm sm:text-base">Awards Won</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default About
