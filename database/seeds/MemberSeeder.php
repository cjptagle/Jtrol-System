<?php

use Illuminate\Database\Seeder;
use App\Member;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('member')->delete();

        Member::create([
        	'last_name' => 'de Jesus',
        	'middle_name' => 'Iglesias',
        	'first_name' => 'Gino',
        	'first_attend' => '04/02/2009',
    	]);
    }
}
