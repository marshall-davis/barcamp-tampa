class SeedPreviousData < ActiveRecord::Migration[5.2]
  def change
    usf = Location.create(
      name: 'University of South Florida'
    )
    mall = Location.create(name: 'University Square Mall')
    kaiser = Location.create(name: 'Kaiser University')
    Location.find_each do |location|
      floor = location.floors.build(number: 1)
      floor.save
    end
    usf111 = Room.create(name: '111', floor_id: usf.floors.first.id)
    usf112 = Room.create(name: '112', floor_id: usf.floors.first.id)
    usf123 = Room.create(name: '123', floor_id: usf.floors.first.id)
    Talk.create(
      user_id: User.create(email: 'sc@hyve.email', first_name: 'Sebastian', last_name: 'Castaldi', twitter: '@wwwsebas', password: SafeRandom.string).id,
      description: 'Overview of Angular 2 - What\'s New, Typescript, Performance, Quick Demo',
      room_id: usf111.id,
      title: 'Introduction to Angular 2',
      time: '2013-01-01 11:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'ch@hyve.email', password: SafeRandom.string, first_name: 'Cameron', last_name: 'Hunt', twitter: '@Redehhh').id,
      title: 'Jed-Box',
      room_id: usf112.id,
      description: 'Exploring P2P & Distributed Web Tech',
      time: '2013-01-01 09:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'ct@hyve.email', password: SafeRandom.string, first_name: 'Cal', last_name: 'Tiger', twitter: '@cal_tiger').id,
      title: 'Bootstrappers Guide',
      description: 'Bootstrappers Guide to the Galaxy',
      room_id: usf123.id,
      time: '2017-01-01 15:00:00'
    )
    jrgriggs = User.create(email: 'jg@hyve.email', password: SafeRandom.string, first_name: 'JR', last_name: 'Griggs', twitter: '@JTGriggs')
    usf1301 = Room.create(name: '1301', floor_id: usf.floors.first.id)
    Talk.create(
      user_id: jrgriggs.id,
      title: 'Designing Websites that Cinvert Free Critiques',
      'description': 'What makes a website convert? Discover the basics and even how your website reviewed.',
      room_id: usf1301.id,
      time: '2017-01-01 14:00:00'
    )
    Talk.create(
      user_id: jrgriggs.id,
      title: 'How to Market Anything',
      'description': 'Marketing 101 - A Rundown of the Best Principles to Apply to Any Business or Product.',
      room_id: usf1301.id,
      time: '2017-01-01 13:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'js@hyve.email', password: SafeRandom.string, first_name: 'Jason', last_name: 'Smalkanyon').id,
      title: 'Performance Testing and Dev Ops',
      description: 'How to Integrate Dev Ops and ME-Testing',
      room_id: usf112.id,
      time: '2017-01-01 14:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'cg@hyve.email', password: SafeRandom.string, first_name: 'Chuck', last_name: 'Gaugh').id,
      title: 'AMA Career in Cybersecurity',
      description: 'Ask Me Anything About the Profession',
      room_id: usf112.id,
      time: '2017-01-01 11:00:00'
    )
    usf1300 = Room.create(name: '1300', floor_id: usf.floors.first.id)
    Talk.create(
      user_id: User.create(email: 'jc@hyve.email', password: SafeRandom.string, first_name: 'Jack', last_name: 'Catlin', twitter: '@jack_catlin').id,
      title: 'Online Community Management Through Chat Programs',
      description: 'Brief Description of That Chat Program Discord. How Discord Revolutionized Online Communities.',
      room_id: usf1300.id,
      time: '2017-01-01 14:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'de@hyve.email', password: SafeRandom.string, first_name: 'Dino', last_name: 'Eliadis', twitter: '@dinoeliadis').id,
      title: 'It\'ll Never Happen to Me: A Case for Business Self Sustainability',
      description: 'How Co-Starters for Founders Changes Lives',
      room_id: usf1300.id,
      time: '2017-01-01 11:00:00'
    )
    usf1101 = Room.create(name: '1101', floor_id: usf.floors.first.id)
    Talk.create(
      user_id: User.create(email: 'et@hyve.email', password: SafeRandom.string, first_name: 'Evan', last_name: 'Thacker', twitter: '@evan_thacker').id,
      title: 'Personal Branding',
      room_id: usf1101.id,
      time: '2017-01-01 15:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'rb@hyve.email', password: SafeRandom.string, first_name: 'Rab', last_name: 'Beverly').id,
      title: 'Hacking Business',
      description: 'Getting It to Work, Optimizing for Free Time, Impact',
      room_id: usf1101.id,
      time: '2017-01-01 09:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'cc@hyve.email', password: SafeRandom.string, first_name: 'Carolina', last_name: 'Connor').id,
      title: 'TechHire Program',
      room_id: usf1101.id,
      time: '2017-01-01 10:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'nc@hyve.email', password: SafeRandom.string, first_name: 'Neil', last_name: 'Cosentino', twitter: '@ConsentinoNeil').id,
      title: 'Mobility Global, Air, Land, Sea',
      description: 'Air, Land, Sea in the 21st Century',
      room_id: usf1101.id,
      time: '2017-01-01 11:00:00'
    )
    Talk.create(
      user_id: User.create(email: 'aa@hyve.email', password: SafeRandom.string, first_name: 'Ann', last_name: 'Adair', twitter: '@AnnAdair10').id,
      title: 'Career #2,3, 4? Teaching!',
      description: 'Talking about becoming a teacher without an ed. degree',
      room_id: usf1101.id,
      time: '2017-01-01 13:00:00'
    )
  end
end
