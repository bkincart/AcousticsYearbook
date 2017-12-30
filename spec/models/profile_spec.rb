RSpec.describe Profile, type: :model do
  it { should have_valid(:graduation_year).when('1993', '2011') }
  it { should_not have_valid(:graduation_year).when('1992', '95', '', nil) }

  it { should have_valid(:major).when('Mathematics', 'Music') }
  it { should_not have_valid(:major).when('', nil) }

  it { should have_valid(:occupation).when('Accountant', 'Software Developer') }
  it { should_not have_valid(:occupation).when('', nil) }

  it { should have_valid(:zip).when('02718', '91628') }
  it { should_not have_valid(:zip).when('', nil) }

  it { should have_valid(:phone).when('123-867-5039', '5551927') }
end
