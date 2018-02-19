# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

years = ["Fall '92 - Spring '93", "Fall '93 - Spring '94", "Fall '94 - Spring '95", "Fall '95 - Spring '96", "Fall '96 - Spring '97", "Fall '97 - Spring '98", "Fall '98 - Spring '99", "Fall '99 - Spring '00", "Fall '00 - Spring '01", "Fall '01 - Spring '02", "Fall '02 - Spring '03", "Fall '03 - Spring '04", "Fall '04 - Spring '05", "Fall '05 - Spring '06", "Fall '06 - Spring '07", "Fall '07 - Spring '08", "Fall '08 - Spring '09", "Fall '09 - Spring '10", "Fall '10 - Spring '11", "Fall '11 - Spring '12", "Fall '12 - Spring '13", "Fall '13 - Spring '14", "Fall '14 - Spring '15", "Fall '15 - Spring '16", "Fall '16 - Spring '17", "Fall '17 - Spring '18"]

years.each { |year| SchoolYear.create!(year_name: year) }
