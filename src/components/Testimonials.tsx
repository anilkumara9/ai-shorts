const testimonials = [
    {
      quote: "ImportTrace has revolutionized our content strategy. We're seeing a 300% increase in engagement!",
      author: "Jane Doe",
      company: "TechCorp",
    },
    {
      quote: "The AI-powered short generation is a game-changer. It saves us hours of editing time.",
      author: "John Smith",
      company: "CreativeMinds",
    },
    {
      quote: "Our viral content output has skyrocketed since we started using ImportTrace.",
      author: "Emily Brown",
      company: "SocialBuzz",
    },
  ]
  
  const Testimonials = () => {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  
  