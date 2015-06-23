<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'member';

    protected $fillable = array('first_name', 'last_name', 'middle_name', 'first_attend');
}
