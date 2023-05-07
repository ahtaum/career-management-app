<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Job;

class JobsDataController extends Controller
{
    public function getJobs() {
        try {
            $jobs = Job::all();
    
            return response()->json([
                'code' => 200,
                'status' => 'success',
                'total' => $jobs->count(),
                'data' => $jobs
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getJob($id)
    {
        try {
            $job = Job::findOrFail($id);

            return response()->json([
                'code' => 200,
                'status' => 'success',
                'data' => $job
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
